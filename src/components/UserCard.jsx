import PropTypes from 'prop-types';
const UserCard = ({ user }) => {
  const { firstName, lastName, gender, age, about, photoUrl } = user;
  return (
    <>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={photoUrl}
            alt={firstName}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{firstName} {lastName}</h2>
          {(age || gender) && (<p>{gender && (<span className="capitalize">{gender}</span>)}
            {age && (<span>, {age}</span>)}</p>)}
          {about && (<p>{about}</p>)}
          <div className="card-actions">
            <button className="btn btn-active btn-secondary">Ignore</button>
            <button className="btn btn-active btn-success">Interested</button>
          </div>
        </div>
      </div>
    </>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    photoUrl: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.string,
    about: PropTypes.string
  }).isRequired
};

export default UserCard;