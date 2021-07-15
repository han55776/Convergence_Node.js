const query = (model) => async (req, res, next) => {
  let query = model.find();

  //if sortBy criteria exists in request query, the query will sort by condition or time order
  if (req.query.sort) {
    query = query.sort(req.query.sort);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination index for searching todo items
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;
  const startIndex = (page - 1) * limit;

  query = query.skip(startIndex).limit(limit);

  // Exectucing query asynchrously
  const todos = await query;

  req.results = {
    sort: req.query.sort,
    page,
    limit,
    todos,
  };

  next();
};

export default query;
