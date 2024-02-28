<script>
    function duplicateText() {
        var inputText = document.querySelector('#textInput').value;
        document.querySelector('duplicateField').innerText = inputText;
    }

    function submitForm() {
        var inputText = document.querySelector('#textInput').value;
        alert('Отправлено: ' + inputText);
    }
</script>
