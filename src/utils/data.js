let lessons = [
    {
        id: 'lesson-1',
        title: 'Pengukuran',
        body: 'Pengukuran merupakan dasar pengetahuan dan keterampilan dari segala kegiatan ilmiah pada berbagai bidang keilmuan, khususnya IPA, sehingga topik ini menjadi topik pembuka pada rumpun mata pelajaran IPA kelas X.',
        mapel: 'IPA',
        kelas: '10',
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 'lesson-2',
        title: 'Sel',
        body: 'Sel tumbuhan dan sel hewan memiliki persamaan dan perbedaan struktur sel dan fungsinya. Persamaan sel tumbuhan dan sel hewan adalah kedua sel 			memiliki bagian-bagian sel, seperti membran sel, sitoplasma, nukleus, mitokondria, ribosom, retikulum endoplasma (RE), aparatus golgi, lisosom, dan peroksisom. 	Untuk mengetahui struktur dan fungsi bagian bagian sel tersebut, mari cermati uraian berikut ini',
        mapel: 'IPA',
        kelas: '11',
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 'lesson-3',
        title: 'Ekosistem darat Bioma',
        body: 'Ekosistem darat Bioma adalah ekosistem darat yang khas pada wilayah tertentu dan dicirikan oleh jenis vegetasi yang dominan pada wilayah tersebut.',
        mapel: 'IPA',
        kelas: '12',
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 'lesson-4',
        title: 'Bentuk-Bentuk Struktur Sosial',
        body: 'Struktur sosial adalah pergaulan hidup masyarakat meliputi tipe kelompok terjadi dari banyaknya kalangan serta lembaga yang mana kalangan ini ambil bagiannya.',
        mapel: 'IPS',
        kelas: '12',
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 'lesson-5',
        title: 'Sosiologi dalam Kehidupan',
        body: 'Sosiologi berdasarkan etimologis, asalnya dari istilah latin Socius artinya ‘kawan, dan teman’, sedang logos asal kata dari Yunani artinya ilm’. Merujuk dari kedua kata itu, sosiologi adalah sebagai ilmu pelajari interaksi manusia terhadap kalangan masyarakat. ',
        mapel: 'IPS',
        kelas: '11',
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 'lesson-6',
        title: 'Perubahan Sosial di Masyarakat',
        body: 'Perubahan sosial bisa dikatakan suatu perubahan gejala sosial yang terdapat di kalangan masyarakat. Perubahan tersebut meliputi fungsi, struktur, norma, nilai, pranata, serta semua aspek dihasilkan dari interaksi sesama manusia, komunitas maupun organisasi, termasuk perubahan mengenai hal budaya.',
        mapel: 'IPS',
        kelas: '10',
        createdAt: '2022-04-14T04:27:34.572Z',
    },

];

function getAllLessons() {
    return lessons;
}

function getLesson(id) {
    const foundedLesson = lessons.find((lesson) => lesson.id === id);
    return foundedLesson;
}

function getActiveLessons() {
    const activeLessons = lessons.filter((lesson) => !lesson.archived);
    return activeLessons;
}

function getArchivedLessons() {
    const archivedLessons = lessons.filter((lesson) => lesson.archived);
    return archivedLessons;
}

function addLesson({ title, body }) {
    lessons = [...lessons, {
        id: `lessons-${+new Date()}`, title: title || '(untitled)', body, createdAt: new Date().toISOString(), archived: false,
    }];
}

function deleteLesson(id) {
    lessons = lessons.filter((lesson) => lesson.id !== id);
}

function archiveLesson(id) {
    lessons = lessons.map((lesson) => {
        if (lesson.id === id) {
            return { ...lesson, archived: true };
        }
        return lesson;
    });
}

function unarchiveLesson(id) {
    lessons = lessons.map((lesson) => {
        if (lesson.id === id) {
            return { ...lesson, archived: false };
        }

        return lesson;
    });
}

function editLesson({ id, title, body }) {
    const lessonToEdit = lessons.find((lesson) => lesson.id === id);
    lessonToEdit.title = title;
    lessonToEdit.body = body;

    lessons = lessons.map((lesson) => {
        if (lesson.id === id) {
            return lesson;
        }
        return lesson;
    });
}

export {
    getAllLessons,
    getActiveLessons,
    getArchivedLessons,
    deleteLesson,
    editLesson,
    getLesson,
    archiveLesson,
    unarchiveLesson,
    addLesson,
};
