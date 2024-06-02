// Array yaratamiz
let elements = ['Element1', 'Element2', 'Element3', 'Element4'];

// Saytga birinchi marta kirilganda arraydagi elementlarni ko'rsatish
alert('Arraydagi elementlar: ' + elements.join(', '));

// Foydalanuvchi tasdiqlash uchun confirm oynasini ko'rsatamiz
let isConfirmed = confirm('4-1');

if (isConfirmed) {
  // Agar OK tugmasi bosilsa, arraydan birinchi elementni olib tashlaymiz
  elements.shift();
  alert('Yangi array: ' + elements.join(', '));
} else {
  // Agar Cancel tugmasi bosilsa, arraydagi barcha elementlarni ko'rsatamiz
  alert('Arraydagi elementlar: ' + elements.join(', '));
}
