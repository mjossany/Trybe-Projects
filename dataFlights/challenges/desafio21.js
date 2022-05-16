db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $gte: 1000 },
  },
  {
    _id: false,
    vooId: true,
  },
);