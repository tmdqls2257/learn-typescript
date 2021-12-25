{
  type Video = {
    id: string
    title: string
    url: string
    data: string
  }

  // video라는 타입에서 id와 title를 가져온다.
  // <T, K extends keyof T>과 [P in keyof T] 차이점은
  // 전자는 부분적인 것만 선택할 수 있고 후자는 모든 것을 배열로 받아옵니다.
  type VideoMetadata = Pick<Video, 'id' | 'title'>

  function _getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    }
  }
  function getVideoMedata(id: string): VideoMetadata {
    return {
      // id와 title 정보만 이요하여 타입을 만들 수 있습니다.
      id: id,
      title: 'title',
    }
  }
}
