{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMedata(id: string): VideoMetadata {
    return {
      // id와 title 정보만 이요하여 타입을 만들 수 있습니다.
      id: id,
      title: 'title',
    };
  }
}
