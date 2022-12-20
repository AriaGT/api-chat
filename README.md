## Endpoints

### Api Route:

http://localhost:9000/api/v1

### Users:

#### /users/
- <span style="color:green">[GET]</span> Obtienes un Array con todos los usuarios.

- <span style="color:blue">[POST]</span> Recibe un objeto con la siguiente estructura: <strong>{ firstName, lastName, email, password, profileImage, phone }</strong> y se registra un nuevo usuario en la BBDD.

#### /users/me
- <span style="color:green">[GET]</span> *(Protegido)* Obtienes los datos de tu usuario.

- <span style="color:orange">[PATCH]</span> *(Protegido)* Recibe un objeto con la siguiente estructura: { firstName, lastName, profileImage, phone }, actualiza los datos que le sean enviados.

- <span style="color:red">[DELETE]</span> *(Protegido)* Elimina el usuario.

#### /users/:id
- <span style="color:green">[GET]</span> *(Protegido)* Obtienes los datos del usuario enviado por params.

### Login:

#### /auth/login 

- <span style="color:blue">[POST]</span> Recibe un objeto con la siguiente estructura: { email, password } y obtienes token JWT de Autenticación.

### Conversations:

#### /conversations/
- <span style="color:green">[GET]</span> *(Protegido)* Obtienes un Array con todas tus conversaciones.

- <span style="color:blue">[POST]</span> *(Protegido)* Recibe un objeto con la siguiente estructura: <strong>{ title, imgUrl, participantId }</strong> y se inicia una nueva conversación.

#### /conversations/:conversation_id/
- <span style="color:green">[GET]</span> *(Protegido)* Obtienes la conversación según el id pasado por params.

- <span style="color:blue">[POST]</span> *(Protegido)* Recibe un objeto con la siguiente estructura: {message}, y registra un nuevo mensaje en la conversación.

- <span style="color:orange">[PATCH]</span> *(Protegido)* Recibe un objeto con la siguiente estructura: {userId}, agrega un participante a la conversación.

- <span style="color:red">[DELETE]</span> *(Protegido)* Elimina la conversación.

#### /conversations/:conversation_id/messages/
- <span style="color:blue">[POST]</span> *(Protegido)* Recibe un objeto con la siguiente estructura: {message}, y registra un nuevo mensaje en la conversación.