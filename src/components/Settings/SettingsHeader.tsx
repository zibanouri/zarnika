const SettingsHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="text-sm text-muted-foreground">
          <span>Last Modified: 2 hours ago by John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;