
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
 app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * @swagger
 *
 * /login:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 */
 app.post('/login', (req, res) => {
    // Your implementation comes here ...
  });