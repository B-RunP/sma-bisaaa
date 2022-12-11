import React from 'react';
import { useParams } from 'react-router-dom';
import LessonDetail from '../component/LessonDetail';
import { bookDetail } from '../utils/api-data';

function DetailPageWrapper() {
    const { id } = useParams();
    return (<DetailPage id={id} />)
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lesson: null,
        }
    }

    componentDidMount() {
        bookDetail(this.props.id).then(({data}) => {
            this.setState({
              lesson: data
            })
          })
    }

    render() {
        console.log(this.state.lesson);

        if (this.state.lesson === null) {
            return <p>Loading...</p>;
        }

        return (
            <section>
                <LessonDetail lessonDetail={this.state.lesson} />
            </section>
        );
    }
}

export default DetailPageWrapper;