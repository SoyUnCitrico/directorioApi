# API REST - Directorio


### Operaciones sin auth 
Login Post /auth/login (eniar user.email y password en body)
REGISTER Post /auth/register (eniar user.name, user.email y password en body)

### Operaciones con auth
Crear Contacto - POST /contact  
Leer Contactos - GET /contact  
Leer Contacto (id: string) - GET /contact/:id  
Leer Varios Contactos GET /contact/many/contacts (Enviar array de íds en el body)
Actualizar Contacto (id: string) - UPDATE /contact/:id  (Enviar data actualizada en el body)
Eliminar Contacto (id: string) - DELETE /contact/:id  


Crear Usuario - POST /user  
Leer Usuarios - GET /user/tT
Leer Usuario (id: string) - GET /user/:id  
Actualizar Usuario (id: string) - UPDATE /user/:id  
Eliminar Usuario (id: string) - DELETE /user/:id  