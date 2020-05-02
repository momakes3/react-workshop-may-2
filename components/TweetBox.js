import styled from "styled-components";

export default function TweetBox(props) {
  const imagePath = props.name
    ? `https://apiv1.there.team/rest/twivatar/${props.name}`
    : `https://via.placeholder.com/30`;

  return (
    <Box>
      <Image src={imagePath} />

      <TextWrapper>
        {props.name && <Name>@{props.name}</Name>}
        <div>{props.children}</div>
      </TextWrapper>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  transition: background 0.15s ease-out 0s;

  &:hover {
    background: #f5f5f9;
  }
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 15px;
  color: #444;

  margin-bottom: 6px;
`;
