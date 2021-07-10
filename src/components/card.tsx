import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

function Index(props: any){
  return(
    <Card className="shadow-lg radius-10">
      <CardImg src={props.img} height="200" alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h6" className="text-truncate">{ props.title }</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 small text-muted">{ props.subTitle }</CardSubtitle>
        <CardText className="truncate-2 small">{ props.content }</CardText>
        {
          props.button && (
            <div className="text-right d-flex justify-content-end">
              <Button
                onClick={props.button && props.onClick}
                color={props.buttonTheme || 'primary'}
                size="sm"
                className="ml-auto">
                {props.button}
              </Button>
            </div>
          )
        }
      </CardBody>
    </Card>
  )
}

export default Index
