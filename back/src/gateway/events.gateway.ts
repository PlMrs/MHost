import { Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserRole } from 'src/users/entities/user.entity';

@WebSocketGateway()
export class EventsGateway {
  private static LOGGER : Logger = new Logger('Gateway')
  private static CHANNEL = "message";
  private static GRANT = [UserRole.CUSTOMER, UserRole.ADMIN]

  @WebSocketServer()
  private server : Server;

  handleConnection(socket: Socket){
    const auth = socket.handshake.headers.authorization
    const token = auth && auth.startsWith("Bearer ") ? auth.substring(7) : null
    if(token){
      const jwts = new JwtService({ secret : process.env.JWT_SECRET })
      const claims = jwts.decode(token) as [key:string]
      const role = claims && claims["role"] ? claims["role"] : null
      if(role && EventsGateway.GRANT.includes(role)){
        const ip = socket.client.conn.remoteAddress;
        this.server.emit(EventsGateway.CHANNEL, `Welcome @${socket.id} on @${ip}`)
        return;
      }
    }
    socket.disconnect();
  }

  @SubscribeMessage(EventsGateway.CHANNEL)
  handleMessage(@ConnectedSocket() socket: Socket,@MessageBody() message: string) {
    EventsGateway.LOGGER.log(`Gateway <- ${message}`)
    socket.broadcast.emit(EventsGateway.CHANNEL, `@${socket.id} ${message}`)
    return 'ok';
  }

  handleDisconnect(socket: Socket){
    const ip = socket.client.conn.remoteAddress;
    this.server.emit(EventsGateway.CHANNEL, `@${socket.id} --> gone`)
  }
}
