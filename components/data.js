const getTweets = () =>
  fetch("https://twitter.morajabi.repl.co/tweets")
    .then(response => {
      return response.json();
    })
    .then(data => data.tweets)
    .catch(error => console.log(error));

const postTweet = ({ name, text }) =>
  fetch(`https://twitter.morajabi.repl.co/tweet?username=${name}&text=${text}`)
    .then(response => {
      return response.json();
    })
    .then(data => data.tweets)
    .catch(error => console.log(error));

const deleteTweet = ({ id }) =>
  fetch(`https://twitter.morajabi.repl.co/delete?id=${id}`)
    .then(response => {
      return response.json();
    })
    .then(data => data.tweets)
    .catch(error => console.log(error));

export default {
  getTweets,
  postTweet,
  deleteTweet
};
