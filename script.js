function showSection(sectionId) {
  // 모든 섹션을 숨기기
  document.getElementById('intro').style.display = 'none'
  document.getElementById('projects').style.display = 'none'
  document.getElementById('contact').style.display = 'none'

  // 클릭한 섹션만 보이기
  document.getElementById(sectionId).style.display = 'block'
}
