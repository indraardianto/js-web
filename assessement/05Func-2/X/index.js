function mahasiswa(nama, kelas) {
  for (const i of nilai) {
    totalNilai += i;
  }

  const avg = totalNilai / nilai.length;
  return `Nama mahasiswa ${nama} kelas ${kelas} dengan total nilai ${totalNilai} dan rata-rata ${avg}`;
}

console.log(mahasiswa("Jojo", "X", 80, 90, 77, 98));

//OUTPUT YANG DIHARAPKAN
//Nama mahasiswa Jojo kelas X dengan total nilai 345 dan rata-rata 86.25
