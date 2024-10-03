import app from './app';
import planetRoutes from './routes/planet.routes';

app.use('/api', planetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
