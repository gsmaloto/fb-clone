import React from "react";
import './Sidebar.css'
import SidebarRow from "./SidebarRow";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <SidebarRow
        icon="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
        title="John Doe"
      />
      <SidebarRow
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png?_nc_eui2=AeFsS8zKxRdsUzDDXjkXHPYeY2wdbxH-OX5jbB1vEf45fmPOmJ7Ng9PQg86m5FTom03P4MhJme55S7FhRBJQPKDk"
        title="Friends"
      />
      <SidebarRow
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png?_nc_eui2=AeEz_gLpKsO6wx2c0UrGMeBUm5Q_-YdsEieblD_5h2wSJzFy5zRk2Dh6xKfxHi6C0quFsB6FFGNETXKCUDY3uQ13"
        title="Groups"
      />
      <SidebarRow
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png?_nc_eui2=AeFqJjo6OXrYYuiOvSZguNHSrr7hPsNNZ9iuvuE-w01n2P6iYZkFK-cey-E7hJNQM33PEr5BDA7zpCFx1RoNXhnC"
        title="Marketplace"
      />
      <SidebarRow
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png?_nc_eui2=AeF3uhMzELydZ4Ayq5btl3C-qF4NV7eRtieoXg1Xt5G2J3sbvI_tWmS82Hn8ozgQ7TVVCvqJhTgXKynxH3yp63Bo"
        title="Watch"
      />
      <SidebarRow
        icon="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png?_nc_eui2=AeGlBlEXjVTxz_UDg16K05l8-TlT3iljuAT5OVPeKWO4BARC2IM6hdhZx1lPl3MGdWrWXL8cixWbHVpz8GkURzE-"
        title="Memories"
      />
      </div>
      
    </div>
  );
};

export default Sidebar;
