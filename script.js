document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aqui você pode adicionar a lógica para autenticação com Firebase ou qualquer outra API
  
    // Exemplo básico de validação de usuário (para fins de demonstração)
    if (email === 'usuario@example.com' && password === 'senha') {
      document.getElementById('login-status').textContent = 'Login bem-sucedido!';
      // Redirecionamento para outra página após login bem-sucedido
      // window.location.href = 'pagina_secreta.html';
    } else {
      document.getElementById('login-status').textContent = 'Credenciais inválidas. Tente novamente.';
    }
  });
  