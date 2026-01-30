# Music2Nodes

Music2Nodes is a **team project** that converts recorded instrument audio into
musical notes to help beginners play songs without available sheet music.

The application allows users to upload audio, processes it using an AI-based
pipeline, and returns the corresponding notes for the selected instrument.

---

## My role in the project

I was responsible for **both frontend and backend integration**:

- implemented the frontend interface
- connected the frontend with the backend services
- handled communication between the UI and the model responce

---

## How it works (high level)

1. User uploads audio from an instrument
2. The AI processes the audio and removes background noise
3. The processed signal is analyzed to extract frequencies
4. Frequencies are mapped to musical notes
5. The final notes are returned and displayed in the frontend

---

## Technologies

- Frontend: HTML / CSS / JavaScript
- Backend: Go / Python
- AI: pre-trained model for audio processing and denoising
- Team project
