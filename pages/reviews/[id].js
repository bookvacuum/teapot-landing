import Layout from '@/components/Layout';

const ListedHome = (review = null) => {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-4">
          <div>
            <h1 className="text-2xl font-semibold truncate">
              {review?.title ?? ''}
            </h1>
            <ol className="inline-flex items-center space-x-1 text-gray-500">
              <li>
                <span>{review?.company ?? 0} guests</span>
                <span aria-hidden="true"> · </span>
              </li>
              <li>
                <span>{review?.role ?? 0} beds</span>
                <span aria-hidden="true"> · </span>
              </li>
              <li>
                <span>{review?.createdAt ?? 0} baths</span>
              </li>
            </ol>
          </div>
        </div>

        <p className="mt-8 text-lg">{review?.content ?? ''}</p>
      </div>
    </Layout>
  );
};

export default ListedHome;