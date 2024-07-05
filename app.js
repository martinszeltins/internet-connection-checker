const availability = [
'[2024-07-04 19:44] Online',
'[2024-07-04 19:45] Online',
'[2024-07-04 19:46] Online',
'[2024-07-04 19:47] Online',
'[2024-07-04 19:48] Online',
'[2024-07-04 19:49] Online',
'[2024-07-04 19:50] Online',
'[2024-07-04 19:51] Online',
'[2024-07-04 19:52] Offline',
'[2024-07-04 19:54] Offline',
'[2024-07-04 19:55] Online',
'[2024-07-04 19:56] Online',
'[2024-07-04 19:57] Online',
'[2024-07-04 19:58] Offline',
'[2024-07-04 19:59] Offline',
'[2024-07-04 20:00] Offline',
'[2024-07-04 20:02] Online',
'[2024-07-04 20:03] Online',
'[2024-07-04 20:04] Online',
'[2024-07-04 20:05] Offline',
'[2024-07-04 20:06] Offline',
'[2024-07-04 20:07] Online',
'[2024-07-04 20:08] Offline',
'[2024-07-04 20:10] Offline',
'[2024-07-04 20:11] Online',
'[2024-07-04 20:12] Online',
'[2024-07-04 20:13] Offline',
'[2024-07-04 20:14] Offline',
'[2024-07-04 20:16] Offline',
'[2024-07-04 20:17] Offline',
'[2024-07-04 20:18] Offline',
'[2024-07-04 20:20] Offline',
'[2024-07-04 20:21] Offline',
'[2024-07-04 20:22] Offline',
'[2024-07-04 20:24] Offline',
'[2024-07-04 20:25] Offline',
'[2024-07-04 20:26] Offline',
'[2024-07-04 20:27] Offline',
];

const container = document.getElementById('timeline-container');

availability.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('timeline-item');
    div.style.backgroundColor = item.includes('Online') ? '#2fd12f' : '#d4d4d4';
    container.appendChild(div);
});
