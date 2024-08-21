function clickMenu() {
    var logs_hidden = document.getElementById('logs-hidden');

    if (logs_hidden.style.display === 'block') {
        logs_hidden.style.display = 'none';
    } else {
        logs_hidden.style.display = 'block';
    }
}

function convertTextToHtmlList(text) {
    const lines = text.split('\n');
    let html = '';
    let insideUl = false; // Para rastrear se estamos dentro de uma <ul>

    lines.forEach(line => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('--')) {
            if (insideUl) {
                html += '</ul>'; // Fecha a <ul> anterior se estiver aberta
            }
            html += '<ul>'; // Abre uma nova <ul>
            insideUl = true;
        } else if (trimmedLine.startsWith('-')) {
            html += `<li>${trimmedLine.substring(1).trim()}</li>`; // Cria um <li>
        }
    });

    if (insideUl) {
        html += '</ul>'; // Fecha a última <ul> aberta
    }

    return html;
}

const text = ` -Primordial's Revenge Event
--
- Collect Amber by defeating Enemies & Bosses in any Dungeon
- Reach Milestones at 25K, 50K, 75K, 100K Amber Collected for Milestone Cosmetics
- Purchased Amber will count towards Milestones 
-Use Amber to spin for Cosmetic Weapons in the Event Area in the lobby!
-- 
- The crate also has a 0.05% chance to drop an alternate usable Secret Weapon from Ethereal Farlands
- Faster Spin is now quicker, 2s -> 0.3s
--`;

const htmlList = convertTextToHtmlList(text);
document.getElementById('output').innerHTML = htmlList;
