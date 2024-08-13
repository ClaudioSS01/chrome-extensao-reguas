window.reguasAtivadas = false;

    function criarReguas() {
      if (window.reguasAtivadas) return;

      // Criar régua horizontal no topo
      const reguaHorizontal = document.createElement("div");
      reguaHorizontal.className = "regua-horizontal";
      document.body.appendChild(reguaHorizontal);

      // Criar régua vertical à esquerda
      const reguaVertical = document.createElement("div");
      reguaVertical.className = "regua-vertical";
      document.body.appendChild(reguaVertical);

      // Adicionar eventos de clique para as réguas
      reguaHorizontal.addEventListener("click", (e) => criarLinhaVertical(e.clientX));
      reguaVertical.addEventListener("click", (e) => criarLinhaHorizontal(e.clientY));

      // Criar linhas de previsão
      const linhaPreveaHorizontal = document.createElement("div");
      linhaPreveaHorizontal.className = "linhaPreveaHorizontal";
      document.body.appendChild(linhaPreveaHorizontal);

      const linhaPreveaVertical = document.createElement("div");
      linhaPreveaVertical.className = "linhaPreveaVertical";
      document.body.appendChild(linhaPreveaVertical);

      // Seguir o cursor sobre as réguas
      reguaHorizontal.addEventListener('mouseover', () => {
        linhaPreveaHorizontal.style.display = 'block';
      });
      reguaHorizontal.addEventListener('mouseout', () => {
        linhaPreveaHorizontal.style.display = 'none';
      });
      reguaHorizontal.addEventListener('mousemove', (e) => {
        linhaPreveaHorizontal.style.left = e.clientX + 'px';
      });

      reguaVertical.addEventListener('mouseover', () => {
        linhaPreveaVertical.style.display = 'block';
      });
      reguaVertical.addEventListener('mouseout', () => {
        linhaPreveaVertical.style.display = 'none';
      });
      reguaVertical.addEventListener('mousemove', (e) => {
        linhaPreveaVertical.style.top = e.clientY + 'px';
      });

      window.reguasAtivadas = true;
    }

    function removerReguas() {
      const reguaHorizontal = document.querySelector(".regua-horizontal");
      const reguaVertical = document.querySelector(".regua-vertical");
      if (reguaHorizontal) reguaHorizontal.remove();
      if (reguaVertical) reguaVertical.remove();

      removerLinhas();

      // Remover linhas de previsão
      const linhaPreveaHorizontal = document.querySelector(".linhaPreveaHorizontal");
      const linhaPreveaVertical = document.querySelector(".linhaPreveaVertical");
      if (linhaPreveaHorizontal) linhaPreveaHorizontal.remove();
      if (linhaPreveaVertical) linhaPreveaVertical.remove();

      window.reguasAtivadas = false;
    }

    function criarLinhaHorizontal(posY) {
      const linhaHorizontal = document.createElement("div");
      linhaHorizontal.className = "linha-horizontal";
      linhaHorizontal.style.top = `${posY}px`;
      document.body.appendChild(linhaHorizontal);
    }

    function criarLinhaVertical(posX) {
      const linhaVertical = document.createElement("div");
      linhaVertical.className = "linha-vertical";
      linhaVertical.style.left = `${posX}px`;
      document.body.appendChild(linhaVertical);
    }

    function removerLinhas() {
      const linhas = document.querySelectorAll('.linha-horizontal, .linha-vertical');
      linhas.forEach(linha => linha.remove());
    }

    document.addEventListener('keydown', (e) => {
      // Verificar se as teclas X, Ctrl e Shift + Digit1 estão pressionadas
      if (e.key === 'x') {
        toggleReguas();
      }
    });

    // Função para ativar/desativar as réguas
    function toggleReguas() {
      if (window.reguasAtivadas) {
        removerReguas();
      } else {
        criarReguas();
      }
    }