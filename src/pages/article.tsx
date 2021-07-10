import {useEffect, useState, Fragment} from 'react'
import {Row, Col, Button} from 'reactstrap'

function toDate(date: Date | any){
  let dt: any
  dt = new Date(date)
  const bln: string[] = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return `${dt.getDate().toString().padStart(2, '0')} ${bln[dt.getMonth()]} ${dt.getFullYear()}`
}
function Index(props: any){
  const [data, dataSet] = useState<any>({})
  useEffect(() => {
    dataSet(props.location.state)
  }, [props])
  return(
    <Fragment>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="bold">{ data.title || 'Lorem Ipsum Dolor Sit Amet' }</h2>
          <Button color="danger" size="sm" className="small py-1 lh-1 mb-4">{ data.author || 'John Doe' }</Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <div className={`w-100 mb-4`} style={{ background: `url(${data.urlToImage || 'https://picsum.photos/800/400'}) center / cover no-repeat`, height: 200 }} />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Row>
            <Col xs="12" className="mt-3">
              <h6 className="text-primary mb-2 blockquote-footer">Published at { toDate(data.publishedAt || Date.now()) }</h6>
            </Col>
            <Col xs="12" className="my-3">
              <h6 className="text-dark small">{ data.content || 'Lorem ipsum dolor sit amet.' }</h6>
            </Col>
          </Row>
          <p className="text-dark small">{ data.description || 'Lorem ipsum dolor sit amet.' }</p>
          <p className="text-dark small mb-0">See Full Article At :</p>
          <a href={data.url || 'https://www.youtube.com/ejachannel'} target="_blank" rel="noreferrer" className="d-block text-primary mb-3 small">{data.url || 'https://www.youtube.com/ejachannel'}</a>
        </Col>
      </Row>
      <Row>
        <Col xs="12 mb-4">
          <div className="bg-light text-center small py-3">
            Copyright ©johndoe All Right Reserved
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Index
