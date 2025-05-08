// Show the modal when the page loads
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("introModal").style.display = "flex";
  });
  
  // Close modal on button click
  function closeModal() {
    document.getElementById("introModal").style.display = "none";
  }
  
  // Site functionality
  let selectedInstrument = null;
  
  function selectInstrument(instrument) {
    selectedInstrument = instrument;
    alert("Instrument selected: " + instrument);
  }
  
  function convertFile() {
    const fileInput = document.getElementById("audioFile");
    if (fileInput.files.length === 0) {
      alert("Please upload a file first.");
      return;
    }
    document.getElementById("output").style.display = "block";
    document.getElementById("notes").innerText = `C4 E4 G4 C5 A4 F4 G4 (Instrument: ${selectedInstrument || 'None'})`;
  }
  
  document.getElementById('aboutBtn').addEventListener('click', () => {
    window.location.href = 'About-Us.html';
  });

  let mediaRecorder;
  let audioChunks = [];
  
  function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
  
      audioChunks = [];
      mediaRecorder.ondataavailable = (e) => {
        audioChunks.push(e.data);
      };
  
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
      
        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = audioUrl;
        downloadLink.download = "recording.wav";
        downloadLink.innerText = "⬇️ Download Your Recording";
        downloadLink.style.display = "block";
        downloadLink.style.marginTop = "1rem";
        downloadLink.style.color = "#4f46e5";
        downloadLink.style.fontWeight = "bold";
      
        // Show notes and link
        const output = document.getElementById("output");
        output.style.display = "block";
        output.innerHTML = `
          <h3>Extracted Notes:</h3>
          <p id="notes">C4 E4 F4 A4 (Instrument: ${selectedInstrument || 'None'})</p>
        `;
        output.appendChild(downloadLink);
      };
      
  
      alert("Recording started...");
    });
  }
  
  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      alert("Recording stopped.");
    }
  }

  
  