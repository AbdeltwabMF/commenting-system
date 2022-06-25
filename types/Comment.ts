interface Comment {
  comment_id: number;
  comment_parent: number;
  comment_body: string;
  comment_rate: number;
  comment_timestamp: Date;
}

export default Comment
