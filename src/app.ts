import { server } from './server';

const port: number = 3332;

server.listen(port, () => {
    console.log(`Endereço do servidor: http://localhost:${port}`);
});