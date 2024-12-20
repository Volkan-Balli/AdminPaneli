function showContent(page) {
    const contentTitle = document.getElementById('content-title');
    const contentArea = document.getElementById('content-area');
    if (page === "dashboard") {
        contentTitle.textContent = "Dashboard";
        contentArea.textContent = "Welcome to your dashboard!";
    }
    else if (page === "users") {
        contentTitle.textContent = "Kullanıcı Listesi";
        contentArea.innerHTML = `
            <table class="table-auto w-full border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="px-4 py-2">ID</th>
                        <th class="px-4 py-2">Adı</th>
                        <th class="px-4 py-2">Soyadı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2">1</td>
                        <td class="border px-4 py-2">John Doe</td>
                        <td class="border px-4 py-2">Smith</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">2</td>
                        <td class="border px-4 py-2">Jane Smith</td>
                        <td class="border px-4 py-2">Johnson</td>
                    </tr>
                </tbody>
            </table>`;
    }
    else if (page === "settings") {
        contentTitle.textContent = "Ayarlar";
        contentArea.innerHTML = `
            <p>Ayarlar</p>
            <button type="button" onclick="alert('Ayarlar kaydedildi')" class="bg-blue-500 text-white px-4 py-2 rounded">Kaydet</button>`;
    }
    }

