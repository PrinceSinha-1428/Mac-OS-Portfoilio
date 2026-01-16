
interface BaseNode {
  id: number;
  name: string;
  icon: string;
  position?: string;
  children?: TreeNode[];
}


export interface FileNode extends BaseNode {
  kind: string;           
  fileType: string;
  imageUrl?: string;
  description?: string[];
  href?: string;
  subtitle?: string;
  image?: string;
}

export interface FolderNode extends BaseNode {
  kind: string;           
  windowPosition?: string;
  children: TreeNode[];
}

export type TreeNode = FileNode | FolderNode;


export interface LocationNode extends FolderNode {
  type: string;          
}

interface TextFileData {
  name: string;
  image?: string;
  subtitle?: string;
  description?: string[];
}
