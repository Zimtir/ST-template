<script>
  let message = "";

  function sayHelloWorld() {
    message = "Hello World!";
  }
</script>

<style scoped>
  html,
  body {
    position: relative;
    width: 100%;
    height: 100%;
  }

  body {
    color: #333;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  button {
    background-color: #f4f4f4;
    outline: none;
  }

  button:active {
    background-color: #ddd;
  }

  button:focus {
    border-color: #666;
  }
</style>

<html lang="ru">
  <body>
    <div>
      {#if message !== ''}
        <div>{message}</div>
      {:else}
        <div>
          <button id="button" class="button" on:click={sayHelloWorld}>
            Show Hello World
          </button>
        </div>
      {/if}
    </div>
  </body>
</html>
