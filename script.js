function clickMenu() {
    var logs_hidden = document.getElementById('logs-hidden');

    if (logs_hidden.style.display === 'block') {
        logs_hidden.style.display = 'none';
    } else {
        logs_hidden.style.display = 'block';
    }
}

const text = `
- Primordial's Revenge Event
#
 - Collect Amber by defeating Enemies & Bosses in any Dungeon
 #
 - Reach Milestones at 25K, 50K, 75K, 100K Amber Collected for Milestone Cosmetics
 #
  - Purchased Amber will count towards Milestones
  #
 - Use Amber to spin for Cosmetic Weapons in the Event Area in the lobby!
 #
  - The crate also has a 0.05% chance to drop an alternate usable Secret Weapon from Ethereal Farlands
  - Faster Spin is now quicker, 2s -> 0.3s
  #`;

function convertTextToHTML(text) {
    const lines = text.split('\n');
    let result = '';
    let inList = false;

    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('#')) {
            if (inList) {
                result += '</ul>\n';
                inList = false;
            }
            else if (!inList) {
                result += '<ul>\n';
                inList = true;
            }
        } else if (line.startsWith('-')) {
            result += `<li>${line.substring(1).trim()}</li>\n`;
        }
    });

    if (inList) {
        result += '</ul>';
    }

    return result;
}

const htmlResult = convertTextToHTML(text);
console.log(htmlResult);
