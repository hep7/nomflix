import { tvApi } from 'api';
import React from "react";
import TVPresenter from "./TVPresenter";

class TV extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      
      this.setState({ topRated, popular, airingToday });
    } catch(e) {
      console.log(e);
      this.setState({
        error: "Can't find TV information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingTday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingTday={airingTday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TV;
