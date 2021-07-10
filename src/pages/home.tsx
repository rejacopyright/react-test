import { useEffect, useState, Fragment, useCallback } from 'react'
import { Row, Col, Input } from 'reactstrap'
import Card from 'components/card'
import { axios } from 'config/helper'
import debounce from 'lodash.debounce'
import { LoadingGrid } from 'components/loading'
function toDate(date: Date | any){
  let dt: any
  dt = new Date(date)
  const bln: string[] = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  return `${dt.getDate().toString().padStart(2, '0')} ${bln[dt.getMonth()]} ${dt.getFullYear()}`
}
function getData(props: any){
  return axios.get('https://newsapi.org/v2/Everything', {params:{
    'q': props.query || 'garut',
    'pageSize': props.count || 9,
    'page': props.page || 1,
  }})
}
function Search(props: any){
  const searchload: any = debounce((e: any) => {
    props.onInput && props.onInput(e.target.value)
  }, 1000);
  function searchChange(e: any){
    props.onInput && props.onInput(null)
    searchload(e)
  }
  return(
    <div className="bg-white px-2 pt-4 pb-3">
      <Input onChange={searchChange} type="text" name="email" placeholder="Search Here" className="shadow" />
    </div>
  )
}
function Index(props: any){
  const count: number = 9
  const [data, dataSet] = useState<any[]>([])
  const [page, pageSet] = useState<number>(1)
  const [query, querySet] = useState<any>('')
  const [loading, loadingSet] = useState<any>(true)
  const [isHabis, isHabisSet] = useState<boolean>(false)
  const [fetch, fetchSet] = useState<any>({})
  const toBottom = useCallback(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      pageSet(p => p+1)
      loadingSet(true)
    }
  }, [])
  window.addEventListener('scroll', toBottom)

  function onInput(e: any){
    if (e) {
      isHabisSet(false)
      loadingSet(true)
      dataSet([])
      pageSet(1)
      querySet(e)
    }
  }
  useEffect(() => {
    getData({page, count, query}).then((res: any) => {
      if (count*page >= res.data.totalResults) {
        isHabisSet(true)
      }else if (res.data.totalResults) {
        isHabisSet(false)
      }
      if (count*(page-1) <= res.data.totalResults) {
        dataSet((r: any) => {
          const m: any = res.data.articles.map((d: any) => {
            const dt: any = new Date(d.publishedAt)
            d.publishedAt = toDate(dt)
            return d
          })
          return [...r, ...m]
        })
        loadingSet(false)
      }
    }).catch((err : any) => {
      fetchSet({status: 'error', message: err.response && err.response.data.message})
      loadingSet(false)
    })
    return () => {
      window.removeEventListener('scroll', toBottom)
    }
  }, [page, query, toBottom])
  return(
    <Row>
      <Col xs="12" className={`text-center sticky-top pb-2 pt-4`}>
        <Search onInput={onInput} />
      </Col>
      {
        data.map((r, key) => (
          <Fragment key={key}>
            <Col md="4" sm="6" className="my-3">
              <Card
                title={r.title}
                subTitle={r.publishedAt}
                content={r.content}
                button={`Lihat Detail`}
                onClick={() => props.history.push({pathname: `/article`, state: r})}
                img={r.urlToImage ? r.urlToImage : 'https://via.placeholder.com/150'} />
            </Col>
          </Fragment>
        ))
      }
      {
        (loading && !isHabis) &&
        Array(6).fill(null).map((r, key) => (
          <Fragment key={key}>
            <Col md="4" sm="6" className="my-3">
              <LoadingGrid />
            </Col>
          </Fragment>
        ))
      }
      <Col xs="12" className={`text-center ${isHabis && 'd-none'}`}>
        <p className="mx-0 my-3 bold text-muted">
          { console.log(process.env) }
          {
            fetch.status === 'error' ? fetch.message : 'Load More Data...'
          }
        </p>
      </Col>
    </Row>
  )
}

export default Index
