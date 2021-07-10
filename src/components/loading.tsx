import Skeleton from 'react-skeleton-loader'

const LoadingGrid : any = () => {
  return (
    <div className="row center-left">
      <div className="col-12">
        <Skeleton width="100%" height="150px" count={1} widthRandomness={0} color="#eee" borderRadius="5px" />
      </div>
      <div className="col-12 lh-12 text-8 mt-2">
        <Skeleton width="100%" height="20px" count={1} widthRandomness={0.5} color="#eee" borderRadius="5px" />
      </div>
      <div className="col-12 lh-12 text-8 mt-2">
        <Skeleton width="100%" height="8px" count={2} widthRandomness={0.25} color="#eee" />
      </div>
    </div>
  )
}

export {
  LoadingGrid
}
