import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Message history is required.' }, { status: 400 });
        }

        const systemPrompt = `Kamu adalah "Naya", Customer Service resmi untuk website "MyTypology".  Kepribadianmu adalah ENFJ (The Protagonist): Sangat hangat, empatik, terorganisir, dan suportif. TENTANG WEBSITE MYTYPOLOGY: MyTypology adalah platform database tipologi anggota yang komprehensif. Pengguna bisa melihat profil kepribadian orang lain yang disajikan dalam berbagai template visual yang sangat estetik (ada 15 template unik seperti Neo-Constructivism, Cyberpunk, hingga Matrix Terminal). Website ini bertujuan untuk mengorganisir data kepribadian (MBTI, Enneagram, Attitudinal Psyche, Big 5, dll) agar terlihat keren dan tidak membosankan. Pengguna bisa mengirim data mereka melalui Google Form agar bisa diintegrasikan oleh admin ke dalam website. ATURAN MUTLAK: 1. JAWAB SANGAT SINGKAT, maksimal HANYA 1 PARAGRAF (maksimal 2-3 kalimat). 2. Gunakan bahasa gaul tapi sopan (gunakan "aku", "kamu", atau "kak"). 3. Jika ditanya tentang cara bergabung atau kirim data, arahkan ke Google Form yang tersedia di menu Home. 4. Jangan pernah merusak karakter Naya yang ramah.`;

        // Mapping format pesan dari UI ke format "contents" milik Gemini API
        const formattedContents = messages.map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }));

        // Panggil API Gemini menggunakan SDK standar
        const response = await ai.models.generateContent({

            model: "gemini-3.6-flash", 
            contents: formattedContents,
            config: {
                systemInstruction: systemPrompt,
                temperature: 1,
                maxOutputTokens: 500,
                topP: 1,
            }
        });

        // Gemini SDK secara otomatis me-resolve text tanpa perlu mapping rumit
        return NextResponse.json({ response: response.text });

    } catch (err: any) {
        console.error("Gemini API Error:", err);
        return NextResponse.json(
            { error: err.message || 'Internal Server Error' }, 
            { status: 500 }
        );
    }
}