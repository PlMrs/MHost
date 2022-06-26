import { Socket } from 'socket.io';
export declare class EventsGateway {
    private static LOGGER;
    private static GRANT;
    private server;
    private users;
    handleConnection(socket: Socket): void;
    handleMessage(socket: Socket, payload: {
        user_id: number;
        message: string;
    }): string;
    handleDisconnect(socket: Socket): void;
}
