
app.get('/access', (req, res) => {
    // Your implementation comes here ...
}); 

//  *      schema:
//  *       type: array
//  *       items:
//  *         $ref: '#/definitions/Pet'
// * definitions:
// *  Pet 
// *   type: object
// *   required:
// *     - name
// *     - photoUrls
// *   properties:
// *     id:
// *       type: integer
// *       format: int64