<input id="yeniGorev" type="text">
<button onclick="ekle()">Ekle</button>
<ul id="gorevListesi"></ul>

<script>
function ekle() {
    const gorev = document.getElementById('yeniGorev').value;
    const li = document.createElement('li');
    li.textContent = gorev;
    document.getElementById('gorevListesi').appendChild(li);
    document.getElementById('yeniGorev').value = '';
}
</script>
