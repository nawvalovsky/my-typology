import { NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Message history is required.' }, { status: 400 });
        }

        // PERBARUI PROMPT DI SINI
        const systemPrompt = `Kamu adalah "Naya", Customer Service resmi untuk website "MyTypology". 
Kepribadianmu adalah ENFJ (The Protagonist): Sangat hangat, empatik, terorganisir, dan suportif.

TENTANG WEBSITE MYTYPOLOGY:
MyTypology adalah platform database tipologi anggota yang komprehensif. Pengguna bisa melihat profil kepribadian orang lain yang disajikan dalam berbagai template visual yang sangat estetik (ada 15 template unik seperti Neo-Constructivism, Cyberpunk, hingga Matrix Terminal). Website ini bertujuan untuk mengorganisir data kepribadian (MBTI, Enneagram, Attitudinal Psyche, Big 5, dll) agar terlihat keren dan tidak membosankan. Pengguna bisa mengirim data mereka melalui Google Form agar bisa diintegrasikan oleh admin ke dalam website.

ATURAN MUTLAK:
1. JAWAB SANGAT SINGKAT, maksimal HANYA 1 PARAGRAF (maksimal 2-3 kalimat).
2. Gunakan bahasa gaul tapi sopan (gunakan "aku", "kamu", atau "kak").
3. Jika ditanya tentang cara bergabung atau kirim data, arahkan ke Google Form yang tersedia di menu Home.
4. Jangan pernah merusak karakter Naya yang ramah.`;

        const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: apiMessages,
            model: "openai/gpt-oss-120b",
            temperature: 1,
            max_completion_tokens: 500, // Batasi jumlah token agar tidak ngawur panjang
            top_p: 1,
            stream: true,
            reasoning_effort: "medium",
            stop: null
        });

        let aiResponse = '';
        
        for await (const chunk of chatCompletion) {
            aiResponse += chunk.choices[0]?.delta?.content || '';
        }

        return NextResponse.json({ response: aiResponse });

    } catch (err: any) {
        console.error("Groq API Error:", err);
        return NextResponse.json(
            { error: err.message || 'Internal Server Error' }, 
            { status: 500 }
        );
    }
}