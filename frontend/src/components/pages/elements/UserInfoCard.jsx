const UserInfoCard = ({user}) => {
    return (
        <div className="d-flex py-1 align-items-center">
                    <span className="avatar me-2"
                          style={{backgroundImage: `url(${user.profile_image})`}}/>
            <div className="flex-fill">
                <div className="font-weight-medium">
                    <a href="/admin/account/{{ $user->id }}"
                       className="text-decoration-none text-black">
                        {user.first_name} {user.middle_name} {user.last_name}
                    </a>
                </div>
                <div className="text-muted"><a href="#" className="text-reset">{user.email}</a></div>
            </div>
        </div>
    );
}

export default UserInfoCard;