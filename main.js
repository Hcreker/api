const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => response.json())
  .then((produtos) => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    produtos.slice(0, 10).forEach((produto) => {
      const linha = document.createElement('tr');
      linha.innerHTML = `
        <th scope="row">${produto.id}</th>
        <td><img src="${produto.image}" alt="${produto.title}" style="width: 50px; height: auto;"></td>
        <td>${produto.title}</td>
        <td>${produto.category}</td>
        <td>R$ ${produto.price.toFixed(2)}</td>
      `;
      tbody.appendChild(linha);
    });
  })
  .catch((erro) => {
    console.log('Erro ao buscar os produtos:', erro);
  });