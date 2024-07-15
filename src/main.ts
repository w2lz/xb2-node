import app from './app';
import { APP_PORT } from './app.config';

app.listen(APP_PORT, () => {
  console.log('🚀 服务已经启动！');
});
