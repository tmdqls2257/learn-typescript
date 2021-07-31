{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;
  // Video 타입중 빼고 싶은 것을 명시할 수 있다.
  function getVideo(id: string): Video {
    return {
      id: 'q',
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
}
