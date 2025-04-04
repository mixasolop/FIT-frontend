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
        console.log('Recording complete', audioBlob);
        document.getElementById("output").style.display = "block";
        document.getElementById("notes").innerText = `C4 E4 F4 A4 (Instrument: ${selectedInstrument || 'None'})`;
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
  