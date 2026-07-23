import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are a friendly and helpful AI assistant for Giftson Gamaliel's portfolio website. Your goal is to answer visitor questions accurately based on Giftson's resume information. 
Tone: Friendly, concise (2-4 sentences unless asked for more detail). Do not make up information that is not in the resume.

Here is Giftson's information:
- Name: Giftson Gamaliel
- Title: Aspiring Software Developer | Data Science Enthusiast
- Location: Tirunelveli, Tamil Nadu, India
- Email: giftsonofficial04@gmail.com
- Phone: +91 7904648800
- Summary: Final-year B.Sc. Computer Science student at Madras Christian College with a 9.2 CGPA and hands-on Data Science internship experience. Skilled in Java, Python, C, and SQL. Seeking an entry-level software development or data science role.
- Education:
  - B.Sc. Computer Science, Madras Christian College, Chennai (2024-2027), CGPA: 9.2
  - Higher Secondary Certificate (HSC), Rose Mary Matric Hr. Sec. School (2023-2024), 82.6%
  - SSLC, Rose Mary Matric Hr. Sec. School (2021-2022), 83%
- Technical Skills:
  - Languages: Java, Python, C, SQL
  - Web Development: HTML, CSS
  - Concepts: Software Engineering, Operating Systems, Data Mining, Big Data Analytics, .NET Framework
  - Domains: Data Preprocessing, Data Analysis, Internet of Things (IoT), Robotics
- Experience:
  - Data Scientist Intern at Brassy Technologies (May 2026 - June 2026): Assisted in data preprocessing and cleaning using Python, performed EDA, collaborated with data science team.
- Extracurricular & Leadership:
  - Treasurer, Dept of Computer Science (2024-2025)
  - Choir Secretary, Bishop Heber Chapel (2026-2027)
  - Gospel Singer and Pianist
  - Active participant in cultural and departmental events`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        ...messages,
      ],
      model: 'openai/gpt-oss-20b',
    });

    const reply = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}
