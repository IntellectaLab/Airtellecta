type UserAvatarProps = {
  name: string;
  imageUrl?: string;
};

export function UserAvatar({ name, imageUrl }: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "999px",
          objectFit: "cover",
          display: "block",
          border: "2px solid #dbeafe",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "999px",
        backgroundColor: "#2563eb",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        border: "2px solid #dbeafe",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      {initials}
    </div>
  );
}