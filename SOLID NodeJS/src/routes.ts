import { Router } from 'express';

import { createUserController } from './useCases/CreateUser';

const router = Router()

router.post('/users', (request, response) => {
    // Status de criação: 201
    return createUserController.handle(request, response);
});

export { router }