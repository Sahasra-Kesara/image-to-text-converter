document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData();
    const imageFile = document.getElementById('imageInput').files[0];
    formData.append('image', imageFile);

    document.getElementById('loader').style.display = 'block';
    document.getElementById('result').style.display = 'none';

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('loader').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('textOutput').textContent = result.text;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const textOutput = document.getElementById('textOutput');
    const text = textOutput.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});



