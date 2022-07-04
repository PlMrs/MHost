"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: 'http://localhost:4500'
        }
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('MHOST api')
        .setDescription('Description de l\'utilisation de l\'api Mhost')
        .setVersion('0.1')
        .addTag('mhost')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('doc', app, document);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map