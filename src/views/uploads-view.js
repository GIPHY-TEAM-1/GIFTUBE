import { toSimpleView } from "./gif-view.js";

export const toUploadsView = (gifs) => 
`
<div data-page="uploads">
  <h3>${gifs.map((g) => g.username)}</h3>
  <div class="content">
  ${gifs.map((g) => toSimpleView(g)).join('\n')}
  </div>
</div>
`;
